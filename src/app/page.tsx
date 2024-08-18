import PageLoader from "@/components/PageLoader";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="bg-darkgray">
        <PageLoader />
        <div className="flex flex-col justify-center items-center h-screen">
          <Title text="MONTOYA" scalePivot={"bottom center"} />

          <div className="flex flex-col items-center justify-center mt-8 ">
            <p className="mt-4 text-neutral-500 font-medium tracking-tight text-lg leading-6 text-center ">
              WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING <br/>
              DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION <br/>
             OF DESIGN AND TECHNOLOGY. 
          </p>
          </div>

        </div>
    </main>
  );
}
