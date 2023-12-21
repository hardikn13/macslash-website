import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hardikn13')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    return (
        <div className='text-center m-4 bg-yellow-600 text-white p-4 text-xl'>GitHub Bio: {data.bio}
            <center><img src={data.avatar_url} alt="Git picture" width={100} /></center>
        </div>
    );
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hardikn13');
    return response.json();
};