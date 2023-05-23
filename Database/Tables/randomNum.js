
// Configurations for the randomNum table

import { supabaseClient } from '../supabaseConfig'

const tableName = 'randomNum'

// Similar to SQL command of SELECT * FROM <table>
export async function getAllRandomNumbers(){
    let data = await supabaseClient().from('randomNum').select()
    console.log(data)
    return data
}
export async function addNewRandomNumber(value){
    return await supabaseClient.from(tableName).insert({randomNum: `${value}`})
}


