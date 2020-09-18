import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';
import {LeafletMouseEvent} from 'leaflet';
import './styles.css';
import logo from '../../assets/logo.svg';
import Alert from '../Alert';
import MaskedInput from '../../components/MaskedInput';

interface Specialties {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreateClinic = () => {
  const [specialties, setSpecialties] = useState<Specialties[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    email: '',
    whatsapp: '',
    phone: '',
  });

  const [selectedUF, setSelectedUF] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<number[]>([]);

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    api.get('specialties').then(response => {
      setSpecialties(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      
      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUF === '0') {
      return;
    }

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios?orderBy=nome`).then(response => {
      const cityNames = response.data.map(city => city.nome);
      
      setCities(cityNames);
    });
  }, [selectedUF]);

  function handleSelectUF(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUF(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng,
    ])
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  }

  function handleSelectSpecialties(id: number) {
    const alreadySelected = selectedSpecialties.findIndex(specialties => specialties === id);

    if (alreadySelected >= 0) {
      const filteredSpecialties = selectedSpecialties.filter(specialties => specialties !== id);

      setSelectedSpecialties(filteredSpecialties);
    } else {
      setSelectedSpecialties([ ...selectedSpecialties, id ]);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, cnpj, email, whatsapp, phone } = formData;
    const uf = selectedUF;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const specialties = selectedSpecialties;

    const data = {
      name,
      cnpj,
      email,
      whatsapp,
      phone,
      uf,
      city,
      latitude,
      longitude,
      specialties
    };

    await api.post('clinics', data);

    setShowAlert(true);

    setTimeout(() => { history.push('/')}, 2000);
  }

  return (
    <div id="page-create-clinic">
      { showAlert && <Alert /> }

      <header>
        <img src={logo} alt="eClinic"/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>Cadastro da <br/>clínica médica</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da Clínica</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="cnpj">CNPJ</label>
              <MaskedInput
                mask="cnpj"
                type="text"
                name="cnpj"
                id="cnpj"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <MaskedInput
                mask="whatsapp"
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />

            </div>
            <div className="field">
              <label htmlFor="phone">Telefone</label>
              <MaskedInput
                mask="whatsapp"
                type="text"
                name="phone"
                id="phone"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer 
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado</label>
              <select
                name="uf"
                id="uf"
                value={selectedUF}
                onChange={handleSelectUF}
              >
                <option value="0">Selecione um Estado</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma Cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Especialidades</h2>
            <span>Selecione as especialidades atendidas</span>
          </legend>
          <ul className="specialties-grid">
            {specialties.map(specialties => (
              <li
                key={specialties.id}
                onClick={() => handleSelectSpecialties(specialties.id)}
                className={selectedSpecialties.includes(specialties.id) ? 'selected' : ''}
              >
                <img src={specialties.image_url} alt={specialties.title}/>
                <span>{specialties.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>
        <button type="submit">
          Cadastrar clínica médica
        </button>
      </form>
    </div>
  );
};

export default CreateClinic;