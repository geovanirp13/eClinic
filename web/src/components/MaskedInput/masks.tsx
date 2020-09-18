export function cnpj(e: React.FormEvent<HTMLInputElement>) {
  //Define o tamanho maximo de digitos
  e.currentTarget.maxLength = 17;

  let value = e.currentTarget.value;
  value=value.replace(/\D/g,"")                   
  value=value.replace(/^(\d{2})(\d)/,"$1.$2")     
  value=value.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
  value=value.replace(/\.(\d{3})(\d)/,".$1/$2")           
  value=value.replace(/(\d{4})(\d)/,"$1-$2") 
  e.currentTarget.value = value;
  return e;
}

export function phone(e: React.FormEvent<HTMLInputElement>) {

  e.currentTarget.maxLength = 14;

  let value = e.currentTarget.value;
  value=value.replace(/\D/g,"")                 
  value=value.replace(/^(\d\d)(\d)/g,"($1) $2") 
  value=value.replace(/(\d{4})(\d)/,"$1-$2")  
  e.currentTarget.value = value;
  return e;
}

export function whatsapp(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 15;

  let value = e.currentTarget.value;
  value=value.replace(/\D/g,"")                 
  value=value.replace(/^(\d\d)(\d)/g,"($1) $2") 
  value=value.replace(/(\d{4})(\d)/,"$1-$2")  
  e.currentTarget.value = value;
  return e;
}