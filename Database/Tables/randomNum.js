
// Configurations for the randomNum table

import { supabaseClient } from '../supabaseConfig'

const tableName = 'randomNum'

// Similar to SQL command of SELECT * FROM <table>
export async function getAllRandomNumbers(){
    return supabaseClient().from(`${tableName}`).select();
}
export async function addNewRandomNumber(value){
    return await supabaseClient.from(tableName).insert({randomNum: `${value}`})
}


