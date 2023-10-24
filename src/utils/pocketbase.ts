import PocketBase from 'pocketbase';

const url = process.env.POCKETBASE_URL
const pocketbase = new PocketBase(url)

pocketbase.admins.authWithPassword('tariq.jandaly@gmail.com', 'A539055652g')

export default pocketbase