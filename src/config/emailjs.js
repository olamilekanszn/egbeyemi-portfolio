// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_b5k3io7', 
  templateId: 'template_ib4oajh',
  publicKey: 'KYzmC_1Y3vT-KLvJz',
  toEmail: 'egbeyemiolamilekan3008@gmail.com',
};


// Template variables that will be sent to EmailJS
export const templateParams = {
  from_name: '',
  from_email: '',
  message: '',
  to_email: emailjsConfig.toEmail
};
