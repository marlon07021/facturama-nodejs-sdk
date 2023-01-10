import FacturamaSDK from '../../facturama';
import axios from 'axios';
import Retencion from '../../modules/Retenciones/Retencion';
import { IRetencion } from '../../abstractions';

const sampleRetencion = {
  FolioInt: 'sample string 1',
  FechaExp: 'sample string 2',
  CveRetenc: 'sample string 3',
  DescRetenc: 'sample string 4',
  Emisor: {
    RfcEmisor: 'sample string 1',
    NomDenRazSocE: 'sample string 2',
    CurpE: 'sample string 3',
  },
  Receptor: {
    Nacionalidad: 'sample string 1',
    Nacional: {
      RfcRecep: 'sample string 1',
      NomDenRazSocR: 'sample string 2',
      CurpR: 'sample string 3',
    },
    Extranjero: {
      NumRegIdTrib: 'sample string 1',
      NomDenRazSocR: 'sample string 2',
    },
  },
  Periodo: {
    MesIni: 1,
    MesFin: 2,
    Ejerc: 3,
  },
  Totales: {
    MontoTotOperacion: 1.0,
    MontoTotGrav: 2.0,
    MontoTotExent: 3.0,
    MontoTotRet: 4.0,
    ImpRetenidos: [
      {
        BaseRet: 1.0,
        Impuesto: 'sample string 1',
        MontoRet: 2.0,
        TipoPagoRet: 'sample string 3',
      },
      {
        BaseRet: 1.0,
        Impuesto: 'sample string 1',
        MontoRet: 2.0,
        TipoPagoRet: 'sample string 3',
      },
    ],
  },
  Complemento: {
    ServiciosPlataformasTecnologicas: {
      Servicios: [
        {
          ImpuestosTrasladadosdelServicio: {
            Base: 1.0,
            Impuesto: 'sample string 2',
            TasaCuota: 3.0,
            Importe: 4.0,
          },
          ContribucionGubernamental: {
            ImpContrib: 1.0,
            EntidadDondePagaLaContribucion: 'sample string 2',
          },
          ComisionDelServicio: {
            Base: 1.0,
            Porcentaje: 1.0,
            Importe: 1.0,
          },
          FormaPagoServ: 'sample string 1',
          TipoDeServ: 'sample string 2',
          SubTipServ: 'sample string 3',
          RfcTerceroAutorizado: 'sample string 4',
          FechaServ: 'sample string 5',
          PrecioServSinIva: 6.0,
        },
        {
          ImpuestosTrasladadosdelServicio: {
            Base: 1.0,
            Impuesto: 'sample string 2',
            TasaCuota: 3.0,
            Importe: 4.0,
          },
          ContribucionGubernamental: {
            ImpContrib: 1.0,
            EntidadDondePagaLaContribucion: 'sample string 2',
          },
          ComisionDelServicio: {
            Base: 1.0,
            Porcentaje: 1.0,
            Importe: 1.0,
          },
          FormaPagoServ: 'sample string 1',
          TipoDeServ: 'sample string 2',
          SubTipServ: 'sample string 3',
          RfcTerceroAutorizado: 'sample string 4',
          FechaServ: 'sample string 5',
          PrecioServSinIva: 6.0,
        },
      ],
      Periodicidad: 'sample string 1',
      NumServ: 2,
      MontToServSIva: 3.0,
      TotalIvaTrasladado: 4.0,
      TotalIvaRetenido: 5.0,
      TotalIsrRetenido: 6.0,
      DifIvaEntregadoPrestServ: 7.0,
      MonTotalporUsoPlataforma: 8.0,
      MonTotalContribucionGubernamental: 1.0,
    },
    TimbreFiscalDigital: {
      Version: 'sample string 1',
      UUID: 'sample string 2',
      FechaTimbrado: '2023-01-09T09:25:28.8098936-06:00',
      SelloCFD: 'sample string 4',
      NoCertificadoSAT: 'sample string 5',
      SelloSAT: 'sample string 6',
      RfcProvCertif: 'sample string 7',
    },
    Intereses: {
      Version: 'sample string 1',
      SistFinanciero: 0,
      RetiroAORESRetInt: 0,
      OperFinancDerivad: 0,
      MontIntNominal: 2.0,
      MontIntReal: 3.0,
      Perdida: 4.0,
    },
  },
  Id: 'sample string 5',
  CadenaOriginal: 'sample string 6',
  IsCanceled: true,
  Sello: 'sample string 8',
};
const sampleRetencionResponse = {
  FolioInt: 'sample string 1',
  FechaExp: 'sample string 2',
  CveRetenc: 'sample string 3',
  DescRetenc: 'sample string 4',
  Emisor: {
    RfcEmisor: 'sample string 1',
    NomDenRazSocE: 'sample string 2',
    CurpE: 'sample string 3',
  },
  Receptor: {
    Nacionalidad: 'sample string 1',
    Nacional: {
      RfcRecep: 'sample string 1',
      NomDenRazSocR: 'sample string 2',
      CurpR: 'sample string 3',
    },
    Extranjero: {
      NumRegIdTrib: 'sample string 1',
      NomDenRazSocR: 'sample string 2',
    },
  },
  Periodo: {
    MesIni: 1,
    MesFin: 2,
    Ejerc: 3,
  },
  Totales: {
    MontoTotOperacion: 1.0,
    MontoTotGrav: 2.0,
    MontoTotExent: 3.0,
    MontoTotRet: 4.0,
    ImpRetenidos: [
      {
        BaseRet: 1.0,
        Impuesto: 'sample string 1',
        MontoRet: 2.0,
        TipoPagoRet: 'sample string 3',
      },
      {
        BaseRet: 1.0,
        Impuesto: 'sample string 1',
        MontoRet: 2.0,
        TipoPagoRet: 'sample string 3',
      },
    ],
  },
  Complemento: {
    ServiciosPlataformasTecnologicas: {
      Servicios: [
        {
          ImpuestosTrasladadosdelServicio: {
            Base: 1.0,
            Impuesto: 'sample string 2',
            TasaCuota: 3.0,
            Importe: 4.0,
          },
          ContribucionGubernamental: {
            ImpContrib: 1.0,
            EntidadDondePagaLaContribucion: 'sample string 2',
          },
          ComisionDelServicio: {
            Base: 1.0,
            Porcentaje: 1.0,
            Importe: 1.0,
          },
          FormaPagoServ: 'sample string 1',
          TipoDeServ: 'sample string 2',
          SubTipServ: 'sample string 3',
          RfcTerceroAutorizado: 'sample string 4',
          FechaServ: 'sample string 5',
          PrecioServSinIva: 6.0,
        },
        {
          ImpuestosTrasladadosdelServicio: {
            Base: 1.0,
            Impuesto: 'sample string 2',
            TasaCuota: 3.0,
            Importe: 4.0,
          },
          ContribucionGubernamental: {
            ImpContrib: 1.0,
            EntidadDondePagaLaContribucion: 'sample string 2',
          },
          ComisionDelServicio: {
            Base: 1.0,
            Porcentaje: 1.0,
            Importe: 1.0,
          },
          FormaPagoServ: 'sample string 1',
          TipoDeServ: 'sample string 2',
          SubTipServ: 'sample string 3',
          RfcTerceroAutorizado: 'sample string 4',
          FechaServ: 'sample string 5',
          PrecioServSinIva: 6.0,
        },
      ],
      Periodicidad: 'sample string 1',
      NumServ: 2,
      MontToServSIva: 3.0,
      TotalIvaTrasladado: 4.0,
      TotalIvaRetenido: 5.0,
      TotalIsrRetenido: 6.0,
      DifIvaEntregadoPrestServ: 7.0,
      MonTotalporUsoPlataforma: 8.0,
      MonTotalContribucionGubernamental: 1.0,
    },
    TimbreFiscalDigital: {
      Version: 'sample string 1',
      UUID: 'sample string 2',
      FechaTimbrado: '2023-01-09T09:25:28.8098936-06:00',
      SelloCFD: 'sample string 4',
      NoCertificadoSAT: 'sample string 5',
      SelloSAT: 'sample string 6',
      RfcProvCertif: 'sample string 7',
    },
    Intereses: {
      Version: 'sample string 1',
      SistFinanciero: 0,
      RetiroAORESRetInt: 0,
      OperFinancDerivad: 0,
      MontIntNominal: 2.0,
      MontIntReal: 3.0,
      Perdida: 4.0,
    },
  },
  Id: 'sample string 5',
  CadenaOriginal: 'sample string 6',
  IsCanceled: true,
  Sello: 'sample string 8',
};

jest.mock('axios');
describe('Retenciones module API', () => {
  const sdk = new FacturamaSDK(false);
  sdk.login('pruebas', 'pruebas2011');

  test('get retention by id', async () => {
    let id = 'Dlb9uyxY2ueQkeJl0TMofQ2';

    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        id,
      },
    });

    const { data } = await sdk.Retenciones.Get('Dlb9uyxY2ueQkeJl0TMofQ2');
    expect(data.id).toBe(id);
    expect(axios.get).toHaveBeenCalledWith(`${sdk.ApiUrl}Retenciones/${id}`, {
      headers: { Authorization: 'Basic cHJ1ZWJhczpwcnVlYmFzMjAxMQ==', 'Content-Type': 'application/json' },
      signal: undefined,
    });
  });

  test('list Retenciones', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: [{ FolioInt: sampleRetencionResponse.FolioInt }],
    });

    const { data } = await sdk.Retenciones.List();
    expect(data).toHaveLength(1);
    expect(axios.get).toHaveBeenCalledWith(`${sdk.ApiUrl}Retenciones`, {
      headers: { Authorization: 'Basic cHJ1ZWJhczpwcnVlYmFzMjAxMQ==', 'Content-Type': 'application/json' },
      signal: undefined,
    });
  });

  test('create Retencion', async () => {
    const retencion = new Retencion(sampleRetencion as any);
    await sdk.Retenciones.Create(retencion);
    expect(axios.post).toHaveBeenCalledWith(
      `${sdk.ApiUrl}Retenciones`,
      { ...retencion.json() },
      {
        headers: { Authorization: 'Basic cHJ1ZWJhczpwcnVlYmFzMjAxMQ==', 'Content-Type': 'application/json' },
        signal: undefined,
      },
    );
  });
});
