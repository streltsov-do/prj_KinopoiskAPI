import styled from "styled-components/macro";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
`;

const PADDING_SLIDER = 5;

export const SliderDiv = styled.div<{
    items: number;
}>`
    width: ${(props) => 380 * props.items + 2 * PADDING_SLIDER}px;
    > .slick-slider {
        padding: ${PADDING_SLIDER}px;
        background-color: lightgreen;

        > .slick-slide {
            width: max-content;
            height: 220px;
            min-width: max-content;
            margin: 0 0;
        }
        > .slick-list {
            margin: 0 0px;
            height: 235px;
            /* height: max-content; */
        }

        > .slick-arrow {
            z-index: 100;
        }

        > .slick-prev {
            left: 10px;
        }
        > .slick-next {
            right: 10px;
        }
    }
`;

export const Error = styled.h4`
    color: red;
`;

export const Flex = styled.div`
    display: flex;
    gap: 10px;
`;

export const Title = styled.div<{ $width: string }>`
    width: ${(props) => props.$width || "auto"};
`;
