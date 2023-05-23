
import { supabaseClient } from "../supabaseConfig"

const tableName = 'posts'

export async function getAllPosts(){
    return supabaseClient().from(`${tableName}`).select();
}