import React, { useState } from "react";

function App() {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];
  const [arr, setArr] = useState(inputArr);

  const addField = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          id: s.length + 1,
          value: "",
        },
      ];
    });
  };

  return (
    <div className="app container">
      <div className="row">
        <div className="col">
          <h1>Admin add desease</h1>
          <form action="">
            <div class="mb-3">
              <label for="formFileMultiple" class="form-label">
                Gambar Penyakit (Boleh Banyak)
              </label>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nama">Nama Penyakit</label>
              <input
                class="form-control"
                type="text"
                id="nama"
                placeholder="Nama Penyakit"
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <h3>Penyebab Penyakit</h3>
              <label for="formFil" class="form-label">
                Gambar Pencegahan
              </label>
              <input class="form-control" type="file" id="formFile" />
              <div class="form-floating mt-3">
                <textarea
                  class="form-control"
                  placeholder="penjelasan"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Penjelasan</label>
              </div>
            </div>
            <div className="mb-3">
              <h3>Gejala</h3>
              <label for="formFil" class="form-label">
                Gambar Gejala
              </label>
              <input class="form-control" type="file" id="formFile" />
              <div class="form-floating mt-3">
                <textarea
                  class="form-control"
                  placeholder="penjelasan"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Penjelasan</label>
              </div>
            </div>
            <div className="mb-3">
              <h3>Perawatan</h3>
              <label for="formFil" class="form-label">
                Gambar Perawatan
              </label>
              <input class="form-control" type="file" id="formFile" />
              <h5>Lists Perawatan</h5>
              {arr.map((a) => (
                <input
                  class="form-control mb-2"
                  type={a.type}
                  id={`perawatan-${a.id}`}
                  placeholder="Perawatan"
                  aria-label="default input example"
                />
              ))}
              <span
                style={{ color: "gray", cursor: "pointer" }}
                className="addAnotherField"
                onClick={addField}
              >
                Tambah lainnya
              </span>
            </div>
            <div className="mb-3">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
