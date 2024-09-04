import { useCharacters } from "../hooks/useCharacters";

export const MarvelApp = () => {
  const { characters, formatImageUrl, page, totalPages, setPage } =
    useCharacters();

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <div className="d-flex flex-row row row-cols-5">
        {characters &&
          characters.map((char) => (
            <div key={char.id} className="col mb-4">
              <h5>{char.name}</h5>
              <img
                src={formatImageUrl(char)}
                style={{ width: "8rem" }}
                alt={char.name}
              />
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button
          className="btn btn-primary mx-2"
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          className="btn btn-primary mx-2"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </>
  )
}
