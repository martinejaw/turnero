import { Component, OnInit } from '@angular/core';
import { ServicesModule } from 'src/app/services/services.module';
import { SucursalService } from 'src/app/services/sucursales.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  imports: [MaterialModule, ServicesModule],
  standalone: true,
})
export class SucursalesComponent implements OnInit {
  constructor(private sucursalService: SucursalService) {}

  ngOnInit(): void {}

  clickBotonAgregarSucursal() {
    this.sucursalService.createBranch();
  }
}
