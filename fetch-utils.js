const SUPABASE_URL = 'https://ritiyenwzsalzpktroey.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODg4NCwiZXhwIjoxOTU1MDg0ODg0fQ.Yn9Ken8agdL7K8NpTPyu81cBonK6zQDKTwIrFdY-xwM';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCharacters() {
    const response = await client

        .from('characters')
        .select();
        // .order('id', true);
    console.log(response.data);
    return response.data;
}

export async function getACharacter(id) {
    const response = await client
        .from('characters')
        .select()
        .match({ id: id })
        .single();
        
    console.log(response.data);
    return response.data;
}