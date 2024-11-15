import { Component, Input } from '@angular/core';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerCameraDirection,
  CapacitorBarcodeScannerTypeHint,
} from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  error = "";
  result = "";

  scanBarcode = async () => {
    console.log('listening for scan....');

    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL,
        cameraDirection: CapacitorBarcodeScannerCameraDirection.FRONT,
        scanOrientation: 1
      });

      this.setScannerResult(result.ScanResult);
    } catch(error: any) {
      console.log('error :>> ', error);
      this.error = error;
    }
  };

  setScannerResult = (result: string) => {
    console.log('result :>> ', result);
    this.result = result;
  };
}
