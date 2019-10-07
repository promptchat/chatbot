import './bootstrap'
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';
import 'daemonite-material/js/material';
import "select2/dist/js/select2";
import 'simplebar';


import ReactLoader from 'react-loader';


import SocialServices from "./components/SocialServices";
import AgentContacts from "./components/AgentContacts";
import Analytics from "./components/Analytics";
import Color from "./components/Color";
import Create from "./components/Create";
import ChatCreator from "./components/ChatCreator";
import Calendar from "./components/Calendar";
import JsonView from "./components/JsonView";
import OperatorPanel from "./components/OperatorPanel";
import PlanCreator from "./components/PlanCreator";
import PlanCount from "./components/PlanCount";

import './image-input';



const react = new ReactLoader('#app');

react.component('socials', SocialServices);
react.component('analytics', Analytics);
react.component('agent-contacts', AgentContacts);
react.component('color', Color);
react.component('create', Create);
react.component('chat-creator', ChatCreator);
react.component('calendar', Calendar);
react.component('json-view', JsonView);
react.component('operator-panel', OperatorPanel);
react.component('plan-count', PlanCount);
react.component('plan-create', PlanCreator);

react.render();


$(document).ready(function() {
    $('.image-input').imageInput();
    $('.audio-input').audioInput();

    let modalHtml = (`
   
    <div class="modal fade" id="prompt" tabindex="-1" role="dialog" aria-labelledby="promptLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="promptLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
               
                <input type="text" id="promptValue" class="form-control" >
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"  data-modal-success>Save</button>
          </div>
        </div>
      </div>
    </div>
`);
    let $modal = $(modalHtml);



    window.customPrompt = (label, value) => {
        $modal.find('#promptLabel').text(label);
        $modal.find('#promptValue').val(value);

        return new Promise((resolve, reject) => {
            let success = function(e) {
                e.preventDefault();
                resolve($modal.find('#promptValue').val());
                $modal.modal('hide');
                return false;
            };
            $modal.find('[data-modal-success]').click(success);
            $modal.find('form').submit(success);

            $modal.modal().on('hide.bs.modal', function() {
                $modal.remove();
                $modal = $(modalHtml)
            })
        })
    };


    window.customSelect = (label, buttons = []) => {
        $modal.find('#promptLabel').text(label);
        let $buttons  = buttons.map((v) => $(`<button type="button" class="btn btn-primary btn-select"  data-modal-success="${v.id}">${v.name}</button>`));
        $modal.find('.modal-body').addClass('modal-select').html($buttons);
        $modal.find('.modal-footer').remove();
        return new Promise((resolve, reject) => {
            let success = function(e) {
                e.preventDefault();
                resolve($(this).data('modal-success'));
                $modal.modal('hide');
                return false;
            };
            $modal.find('[data-modal-success]').click(success);


            $modal.modal().on('hide.bs.modal', function() {
                $modal.remove();
                $modal = $(modalHtml)
            })
        })
    };


    let Modal = {
        init: function () {
            this.initEditModal();
        },
        initEditModal: function() {
            $(document).on('click', '.load-form-modal', function(event){
                $('#show-form-modal .modal-body').load($(this).attr('href'));
                event.preventDefault();
            });
        }
    };
    Modal.init();
});


$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        language: 'en',
    });

    $('.filter-form input, .filter-form select').on('change', function() {
        $(this).parents('form').submit();
    });

    $('.select2').select2();

    $('.select2-multiple').select2();

    $('form.delete-record').on('submit', function() {
        return confirm('Are you sure? (All data will be lost and cannot be recovered)')
    });

    $(document).on("click", ".delete-form-btn", function () {
        let $this = $(this);
        let action = $this.data("action");
        let id = $this.data("id");
        let csrf_token = $( "input[name='_token']" ).val();

        $.ajax({
            url: action,
            type: "DELETE",
            data: {'id' : id, "_token": csrf_token,},
            success: function (response)
            {
                window.location.reload()
            }
        });
    });
});

var main = function() {

    const menuWidth = 285;
    $('.icon-menu').click(function() {

        $('.menu').animate({
            left: 0
        }, 200);

        $('.dynamic-content').animate({
            'margin-left': menuWidth
        }, 200);

        $('.burger').hide();
    });

    $('.icon-close').click(function() {

        $('.menu').animate({
            left: -menuWidth
        }, 200);

        $('.dynamic-content').animate({
            'margin-left': 0
        }, 200);

        $('.burger').show();
    });

    $('.settings-button').on('click', function(){

    });


};



$(document).ready(main);
