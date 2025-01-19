import { connectToDatabase } from "@/lib/mongodb";

export default async function CheckConnPage() {
    const connected = await connectToDatabase();

    if(!connected){
      console.log('Database is not connected');
    }

    return (
      <div>
          <div className="text-xl font-bold mb-4">Check Connection Page</div>          
          
      </div>
    );
  }