import TrackingClient from "./TrackingClient";

export default async function TrackingPage({ 
  params 
}: { 
  params: Promise<{ sttNumber: string }> 
}) {
  // Await params untuk Next.js 15+
  const { sttNumber } = await params;
  
  return <TrackingClient sttNumber={sttNumber} />;
}