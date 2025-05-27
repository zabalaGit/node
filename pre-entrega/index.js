const args = process.argv.slice(2); 
const verbo = args[0];
const path = args[1];
const url = 'https://fakestoreapi.com/'

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

const postData = async (url, product) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

const deleteData = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

if (verbo === 'GET') { 
    const uri = url + path;
    fetchData(uri);    

} else if (verbo === 'POST') { 
    const uri = url + path;
    const [title, price, category] = args.slice(2);
    const product = { title: title, price: price, category: category };
    postData(uri, product); 

} else if (verbo === 'DELETE') { 
    const uri = url + path;
    deleteData(uri);    

} else { 
    console.log('Comando no reconocido.'); 
} 
