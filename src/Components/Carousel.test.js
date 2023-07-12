import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

describe('ToggleComponent', () => {

    it("check search", ()=> {
        render(<Carousel/>)
        expect(screen.getByTestId("search")).toBeInTheDocument();
    } )

    it("check search input", ()=> {
        render(<Carousel/>)
        expect(screen.getByTestId("searchinput")).toBeInTheDocument();
    } )
    
 });

