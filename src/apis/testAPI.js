import axios from "@/utils/axios";

export function getCategory() {
    return  axios({
        url: 'home/category/head'
    })
}