
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  userName: string
  password: string
}

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)



  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input  {...register("userName", { required: true, minLength: 6 })} />
      {errors.userName && <span>This field is required</span>}
      <br />
      <input {...register("password", { required: true, minLength: 6 })} />
      {errors.password && <span>This field is required</span>}
      <br />
      <button type="submit">Submit</button>
    </form>
  )

}

