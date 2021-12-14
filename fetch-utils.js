const SUPABASE_URL = 'https://vcdqbfadbeozxnhcridd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQ0MzYyNSwiZXhwIjoxOTU1MDE5NjI1fQ.nTbAyEW7tiaVYV_havlZntlWHrJWQg-I57KtSHFWXnk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCharacters() {
    const response = await client

        .from('characters')
        .select();
    
    return response.data;
}

export async function getACharacter(id) {
    const response = await client
        .from('characters')
        .select()
        .match({ id: id })
        .single();
    
    return response.data;
}