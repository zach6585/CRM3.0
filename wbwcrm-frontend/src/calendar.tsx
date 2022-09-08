import { Providers } from '@microsoft/mgt-element';

const Calendar = () => {
    const authProvider = Providers.globalProvider;
    const options = {
        authProvider,
    }

    return(
        <div>
            <h1>hi</h1>
        </div>
    )
}

export default Calendar;