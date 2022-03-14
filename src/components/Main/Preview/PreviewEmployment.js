import React from 'react';
import { useFormContext } from 'react-hook-form';

const PreviewEmployment = () => {
    const { watch } = useFormContext();
    const { company, employmentCity, employmentFrom, employmentTo, position } = watch();

    const displayInformation = (value) => {
        if (value === '') return false;

        return true;
    };

    return (
        <section className='preview_employment'>
            <h3>Employment</h3>
            <hr />
            <div>
                <div>
                    <p>{`${displayInformation(employmentFrom) ? employmentFrom : 'Start Date'} - ${displayInformation(employmentTo) ? employmentTo : 'End Date'}`}</p>
                </div>
                <div>
                    <p>{displayInformation(position) ? position : 'Position'}</p>
                    <p>{`${displayInformation(company) ? company : 'Company'}, ${displayInformation(employmentCity) ? employmentCity : 'City'}`}</p>
                </div>
            </div>
        </section>
    );
};

export default PreviewEmployment;