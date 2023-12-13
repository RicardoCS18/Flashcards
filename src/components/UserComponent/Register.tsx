import * as z from "zod"
import {
  Form
  , FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from '../ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  userEmail: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(3),
  passwordConfirm: z.string().min(3)
}).refine(data => data.password === data.passwordConfirm, { message: "Passwords do not match" })

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    userEmail: "",
    password: "",
    passwordConfirm: ""
  }
})


function Register() {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="userEmail"
        render={() => (
          <FormItem>
            <FormLabel />
            <FormControl>
              F
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}

export default Register


