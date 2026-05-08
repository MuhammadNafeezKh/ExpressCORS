const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();

app.use(cors());
app.use(express.json());

//endpoint get /siswa
app.get("/siswa",(req,res) =>{
const sql = `
    SELECT
        siswa.nama,
        perusahaan.nama_perusahaan,
        pembimbing.nama_pembimbing
    FROM siswa
    JOIN perusahaan
        ON siswa.perusahaan_id = perusahaan.id
    JOIN pembimbing
        ON siswa.pembimbing_id = pembimbing.id
`;
//menjalankan query
db.query(sql, (error, result) => {
  if (error) return res.json(error);
  res.json(result);
});
});

//jalankan server
app.listen(3000,()=>{
    console.log("Server jalan wokk!!!");
});
