import 'package:flutter/material.dart';
import 'ar_view_screen.dart';
import 'map_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('ExplorAR')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              child: Text('Voir en AR'),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context) => ARViewScreen()));
              },
            ),
            ElevatedButton(
              child: Text('Voir sur Carte'),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context) => MapScreen()));
              },
            ),
          ],
        ),
      ),
    );
  }
}
