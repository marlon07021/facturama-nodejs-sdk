import { IContribucionGubernamental } from '../../../abstractions';
export declare class ContribucionGubernamental implements IContribucionGubernamental {
    EntidadDondePagaLaContribucion: string;
    ImpContrib: number;
    constructor(contribucion: IContribucionGubernamental);
    json(): any;
}
