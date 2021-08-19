#include "../Ι_utils/functions/restrictInputKeys.jsx"

#include "../Ι_utils/functions/allowMinusOnlyAtFront.jsx";

#include "../Ι_utils/functions/setMaxNumber.jsx";

#include "../Ι_utils/functions/sameInputField.jsx";

#include "../Ι_utils/functions/setDropdownSelectionFromEvent.jsx";

#include "../Ι_utils/functions/changeTooltipAndImageAccordingToState.jsx";

#include "../Ι_utils/functions/mathSumWidthAndHeight.jsx";

#include "../Ι_utils/functions/ErrorDiffrentUnitTypes.jsx";

#include "../Ι_utils/functions/getRidOfTooMuch0AtFront.jsx";

function restrictValueUpTo(maxResValue, valueInEdittext) {
    if (parseInt(valueInEdittext.text, 10) > maxResValue) {
        valueInEdittext.text = maxResValue;
    }
}

function setMinimalValueAt(value, edittext) {

    if ( edittext.text === "" || parseInt(edittext.text, 10) < value) {
        edittext.text = value;
    }
}