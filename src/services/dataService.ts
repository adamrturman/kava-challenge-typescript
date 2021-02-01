import axios from 'axios'

export function fetchData(){
    return axios.get("https://cors-anywhere.herokuapp.com/https://kava-3-snapshots.s3.amazonaws.com/kava-4-export-20210122.json");
}
