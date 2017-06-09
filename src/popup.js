var javaDocList = [
	{"name": "Javadoc SE 8", "link": "https://docs.oracle.com/javase/8/docs/api/"},
	{"name": "Javadoc SE 7", "link": "https://docs.oracle.com/javase/7/docs/api/"},
	{"name": "Javadoc EE 7", "link": "https://docs.oracle.com/javaee/7/api/"},
	{"name": "Spring Framework API", "link": "http://docs.spring.io/spring/docs/current/javadoc-api/"},
	{"name": "Spring Boot Docs API", "link": "http://docs.spring.io/spring-boot/docs/1.5.4.RELEASE/api/"},
	{"name": "Spring Security API", "link": "http://docs.spring.io/spring-security/site/docs/4.2.3.RELEASE/apidocs/"},
	{"name": "Spring Batch API", "link": "http://docs.spring.io/spring-batch/trunk/apidocs/index.html"},
	{"name": "Spring Data JPA API", "link": "http://docs.spring.io/spring-data/jpa/docs/1.11.4.RELEASE/api/"},
	{"name": "Spring Data MongoDB API", "link": "http://docs.spring.io/spring-data/data-mongo/docs/1.10.4.RELEASE/api/"},
	{"name": "Spring REST API", "link": "http://docs.spring.io/spring-restdocs/docs/1.2.1.RELEASE/api/"},
	{"name": "Spring HATEOAS API", "link": "http://docs.spring.io/spring-hateoas/docs/0.23.0.RELEASE/api/"},
	{"name": "Spring Web Services API", "link": "http://docs.spring.io/spring-ws/docs/2.4.0.RELEASE/api/"},
	{"name": "Spring Web Flow API", "link": "http://docs.spring.io/spring-webflow/docs/2.4.5.RELEASE/api/"},
];


$(document).ready(function() {
	$("#javadocList").append(generateList(javaDocList));
});

function generateList(linkList) {
	var listStr = "";
	for(i =0; i < linkList.length; i++) {
		var item = linkList[i];
		listStr += "<li class='list-group-item'><a target='_blank' href='" + item.link + "'>" + item.name + "</a></li>";
	}
	return listStr;
}