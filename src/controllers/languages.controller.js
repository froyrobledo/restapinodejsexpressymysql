import { getConnection } from "../databases/database";

const getCitys = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM city ')
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

const getCity = async (req, res) => {

    try {
        
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('SELECT ID, Name, CountryCode, District, Population FROM city WHERE ID = ?', id)
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

const getCityForName = async (req, res) => {

    try {
        
        const {name} = req.params
        const connection = await getConnection();
        const result = await connection.query(`SELECT * FROM city WHERE Name = ${{name}}`)
        res.json(result)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

const addCity = async (req, res) => {
    try {
        const { Name, CountryCode, District, Population } = req.body;
        const citi = { Name, CountryCode, District, Population}
        if(!Name || !CountryCode || !District || !Population){
            res.status(400).json({message: 'Bad Request. Llena todos los campos '})
        }
        const connection = await getConnection();
        await connection.query("INSERT INTO city SET ?", citi)
        res.json({message: 'ciudad aderida '})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const updateCity = async (req, res) => {
    try {
        const {id} = req.params
        const { Name, CountryCode, District, Population } = req.body;
        const citi = { id, Name, CountryCode, District, Population}
        const connection = await getConnection();
        const result = await connection.query('UPDATE city SET ? WHERE id = ?', [citi, id])
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

const deleteCity = async (req, res) => {
    try {
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM city WHERE ID = ?', id)
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}



export const methods = {
    getCitys,
    addCity,
    getCity,
    deleteCity,
    updateCity,
    getCityForName
}