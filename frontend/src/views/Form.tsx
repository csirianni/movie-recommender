import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Recommend from "../components/Recommend";

function Form() {
    return (
        <div>
            <Navbar />
            <Search />
            <div id="examples">
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            <Recommend />
        </div>
    )
}

export default Form;