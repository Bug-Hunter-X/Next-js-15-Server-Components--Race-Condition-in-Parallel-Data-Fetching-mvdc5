import { Suspense } from 'react'

async function fetchData() {
  const [userData, orderData] = await Promise.all([
    fetch('/api/user').then(res => res.json()),
    fetch('/api/orders').then(res => res.json())
  ]);

  if (!userData || !orderData) {
    throw new Error('Failed to fetch data');
  }

  return { userData, orderData };
}

export default function Page() {
  const { userData, orderData } = useFetchData();

  if (userData.error || orderData.error) {
    return <div>Error: {userData.error || orderData.error}</div>;
  }

  return (
    <div>
      <h1>User: {userData.name}</h1>
      <h2>Orders:</h2>
      <ul>
        {orderData.map(order => (
          <li key={order.id}>{order.description}</li>
        ))}
      </ul>
    </div>
  );
}

function useFetchData() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchData().then(setData).catch(setError);
  }, []);

  return { ...data, error };
}