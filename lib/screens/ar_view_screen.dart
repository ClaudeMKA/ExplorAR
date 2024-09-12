import 'package:flutter/material.dart';
import 'package:ar_flutter_plugin/ar_flutter_plugin.dart';

class ARViewScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Vue AR')),
      body: ARView(
        onARViewCreated: (ARViewController controller) {
          // Ajouter des objets AR ici
        },
      ),
    );
  }
}
