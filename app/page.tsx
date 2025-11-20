import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepOne } from "./components/StepOne";
import { Steptwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";

const Home = () => {
  return (
    <div className="flex justify-center itams-center">
      <Tabs defaultValue="account" className="w-[580px] h-screen flex gap-10 ">
        <TabsList className="w-full ">
          <TabsTrigger value="analysis">Image analysis</TabsTrigger>
          <TabsTrigger value="recognition">Ingredient recognition</TabsTrigger>
          <TabsTrigger value="creator">Image creator</TabsTrigger>
        </TabsList>
        <TabsContent value="analysis">
          <StepOne />
        </TabsContent>
        <TabsContent value="recognition">
          <Steptwo />
        </TabsContent>
        <TabsContent value="creator">
          <StepThree />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Home;
