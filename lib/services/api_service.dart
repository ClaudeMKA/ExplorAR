import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  Future<List<dynamic>> fetchMonuments() async {
    final response = await http.get(Uri.parse('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=liste-des-monuments-historiques&q=&rows=10'));

    if (response.statusCode == 200) {
      return jsonDecode(response.body)['records'];
    } else {
      throw Exception('Failed to load monuments');
    }
  }
}
