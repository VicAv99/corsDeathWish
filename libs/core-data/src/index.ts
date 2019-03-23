export { CoreDataModule } from './lib/core-data.module';

export { Artist, Album } from './lib/spotify/spotify.model';

export { JwtAuthGuard } from './lib/auth/jwt-auth.guard';
export { AuthGuard } from './lib/auth/auth.guard';
export { AuthService } from './lib/auth/auth.service';
export { SpotifyService } from './lib/spotify/spotify.service';
export { TokenInterceptorService as TokenInterceptor } from './lib/auth/token-interceptor.service';
