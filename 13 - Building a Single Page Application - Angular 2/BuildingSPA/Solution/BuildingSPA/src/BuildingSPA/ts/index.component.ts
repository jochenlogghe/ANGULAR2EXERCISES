import {Component, OnInit} from 'angular2/core';
declare var $: any;

@Component(
    { templateUrl: '/partials/index.component.html' }
)
export class IndexComponent implements OnInit {
    ngOnInit() {
        $('.parallax').parallax();
    }
}