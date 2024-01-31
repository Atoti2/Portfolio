async function fetchData(fc){
    const url1 = 'https://raw.githubusercontent.com/Atoti2/Portfolio_data/main/portfolio_data.json'
    const response = await fetch(url1);
    const data = await response.json();
    fc(data)
}

export default fetchData

