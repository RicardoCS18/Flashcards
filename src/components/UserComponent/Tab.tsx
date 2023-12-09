import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Login from "./Login"
import Register from "./Register"

const Tab = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="login"><Login /></TabsContent>
      <TabsContent value="register"><Register /></TabsContent>
    </Tabs>
  )
}

export default Tab