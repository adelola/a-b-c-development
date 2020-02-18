import React from 'react';
import LetterChart from './LetterChart';

const AlphabetProgressChart =() => {

    const letterA = ["correct","incorrect","correct","incorrect","correct","correct","correct","correct"]


    return(
        <div>
            <h1>Alphabet Progress Chart</h1>
            <LetterChart letter={letterA} />
        </div>
    )

}

export default AlphabetProgressChart