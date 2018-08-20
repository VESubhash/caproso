import { DashboardModule } from './general-info.module';

describe('DashboardModule', () => {
  let dashboardModule: DashboardModule;

  beforeEach(() => {
    dashboardModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
