function OnCollisionEnter(collision : Collision){
	var impactSum = collision.impactForceSum.x + collision.impactForceSum.y + collision.impactForceSum.z;	
	var meshFilter : MeshFilter = collision.transform.GetComponent(MeshFilter);
	if(meshFilter != null){
		var verts : Vector3[] = meshFilter.mesh.vertices;
		var i : int;
		var j : int = 0;
		for (i = 0; i < verts.Length; ++i){
			var scaledVert : Vector3 = Vector3.Scale(verts[i], transform.localScale);
			var vertWorldPos : Vector3 = meshFilter.transform.position + (meshFilter.transform.rotation * scaledVert);
			var origin : Vector3 = vertWorldPos - collision.contacts[0].point;
			if(origin.sqrMagnitude < 13){
				//verts[i] += transform.rotation * Vector3(2, 2, 2); //(collision.gameObject.rigidbody.velocity * 25);
				verts[i] += transform.rotation * Vector3.up;
				++j;
			}
			print(origin.sqrMagnitude);
		}
		print(j);
		meshFilter.mesh.vertices = verts;
		meshFilter.mesh.RecalculateBounds();
	}
	
	
	
	//(collision.transform.GetComponent(MeshFilter) as MeshFilter).mesh.vertices;
	
}