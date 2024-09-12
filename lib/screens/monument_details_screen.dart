import 'package:flutter/material.dart';

class MonumentDetailsScreen extends StatelessWidget {
  final String monumentName;
  final String monumentDescription;

  MonumentDetailsScreen({required this.monumentName, required this.monumentDescription});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(monumentName)),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(monumentDescription, style: TextStyle(fontSize: 16)),
          ],
        ),
      ),
    );
  }
}
