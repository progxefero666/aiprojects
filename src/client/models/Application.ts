//src\client\models\Application.ts
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Application = {
    id: number;
    name: string;
    reference?: string;
    author: string;
    apptype: string;
    proglanguage?: string;
    osystem?: string;
    appurl?: string;
    apppath?: string;
    localdev?: boolean;
    usedocker?: boolean;
    creationdate?: string;
    updatedate?: string;
    description: string;
    controlusers?: boolean;
    useui?: boolean;
    useagents?: boolean;
    consumedb?: boolean;
    consumeapi?: boolean;
    consumeai?: boolean;
    exposedb?: boolean;
    exposeapi?: boolean;
};

