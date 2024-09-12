import 'package:geolocator/geolocator.dart';

class GeolocationService {
  Future<Position> getCurrentPosition() async {
    return await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
  }
}
