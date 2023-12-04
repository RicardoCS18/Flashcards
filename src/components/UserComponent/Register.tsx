
import { useForm, SubmitHandler } from 'react-hook-form';


type Inputs = {
  userEmail: string;
  password: string;
  repeatedPassword: string;
};

export const Register = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
      <input {...register('userEmail', { required: true })} placeholder='Email' className="input" required />
      <br />
      <input {...register('password', { required: true })} placeholder='Password' className="input" required />
      <br />
      <input {...register('repeatedPassword', { required: true })} placeholder='Confirm Password' className="input" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};



