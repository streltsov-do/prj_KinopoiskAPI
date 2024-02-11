import { StatsLoader, StatsLoading } from "./style/Loader";
import loader from "./loader.svg";

const Loader = (props: {
    widthDiv: number;
    widthLoader: number;
    widthDivMin?: number;
}) => {
    const { widthDiv, widthLoader, widthDivMin } = props;
    return (
        <StatsLoading width={widthDiv} $min_width={widthDivMin}>
            <StatsLoader width={widthLoader} src={loader} alt="loading" />
        </StatsLoading>
    );
};

export default Loader;
