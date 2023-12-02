
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  userEmail: string
  password: string
}

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formContainer">

      <input  {...register("userEmail", { required: true, minLength: 6 })} placeholder="Email" className="input" required />
      {errors.userEmail && <span>This field is required</span>}
      <br />
      <input {...register("password", { required: true, minLength: 6 })} placeholder="Password" className="input" required />
      {errors.password && <span>This field is required</span>}
      <br />
      <button type="submit">Submit</button>
    </form>
  )

}

