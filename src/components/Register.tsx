
import { useForm, SubmitHandler } from 'react-hook-form';


type Inputs = {
  userName: string;
  password: string;
  userEmail: string;
};

export const Register = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('userName', { required: true })} />
      <br />
      <input {...register('password', { required: true })} />
      <br />
      <input {...register('userEmail', { required: true })} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};



